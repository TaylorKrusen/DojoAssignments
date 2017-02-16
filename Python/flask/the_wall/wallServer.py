from flask import Flask, render_template, redirect, request, session, flash
import re
from mysqlconnection import MySQLConnector
from flask_bcrypt import *
app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = "ThisIsSecret!"
mysql = MySQLConnector(app, 'Wall_Final')

emailRegex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
passRegex = re.compile('\d.*[A-Z]|[A-Z].*\d')

def getMsg():
    getPosts = "SELECT users.first_name, users.last_name, messages.message, messages.created_at, messages.id AS msgID FROM users JOIN messages ON users.id=messages.users_id ORDER BY messages.created_at DESC"
    posts = mysql.query_db(getPosts)
    session['posts'] = posts
    return posts

def getComments():
    getComments = "SELECT comments.messages_id, comments.comment, comments.created_at, users.first_name, users.last_name FROM comments LEFT JOIN messages ON comments.messages_id = messages.id LEFT JOIN users ON comments.users_id = users.id ORDER BY comments.created_at ASC"
    comments = mysql.query_db(getComments)
    session['comments'] = comments

def validate():
    errors = 0
    # First Name Check
    if request.form['fname'] == '':
        flash('I demand your First Name!', 'fname_Error')
        errors += 1
    elif any(char.isdigit() for char in request.form['fname']) == True:
        flash('Name cannot have numbers', 'fname_Error')
        errors += 1
    else:
        session['first_name'] = request.form['fname']

    # Last Name Check
    if request.form['lname'] == '':
        flash('How dare you not give me your Last Name!', 'lname_Error')
        errors += 1
    elif any(char.isdigit() for char in request.form['lname']) == True:
        flash('Name cannot have numbers', 'lname_Error')
        errors += 1
    else:
        session['last_name'] = request.form['lname']

    # Email Check
    if request.form['email'] == '':
        flash('I need your email. Please. Please. PLEASE?!', 'emailError')
        errors += 1
    elif not emailRegex.match(request.form['email']):
        flash('Nice try, but give me that REAL email please.', 'emailError')
        errors += 1
    else:
        session['email'] = request.form['email']

    # Password Check
    if str(request.form['password']) == '':
        flash('Password cannot be blank', 'pwordError')
        errors += 1
    elif len(request.form['password']) < 8:
        flash('Password must be greater than 8 characters', 'pwordError')
        errors += 1
    elif not passRegex.match(request.form['password']):
        flash('Password must contain at least one lowercase letter, one uppercase letter, and one digit', 'pwordError')
        errors += 1
    else:
        session['password'] = str(request.form['password'])

    # Confirmation password matches?
    if len(request.form['passConfirm']) == 0:
        flash('Please confirm password', 'confirm_passwordError')
        errors += 1
    elif str(request.form['passConfirm']) != str(request.form['password']):
        flash('Passwords do not match', 'confirm_passwordError')
        errors += 1
    else:
        session['confirm_password'] = str(request.form['passConfirm'])

     #See if there are any errors
    if errors > 0:
        session['password'] = ''
        session['confirm_password'] = ''
        return False
    return True

def validateLogin():
    errors = 0
     #Check email
    if str(request.form['email']) == '':
        flash('Email cannot be blank', 'logEmailError')
        errors += 1
        pass
    elif not emailRegex.match(request.form['email']):
        flash('Invalid email address', 'logEmailError')
        errors += 1
        pass
    else:
        session['email'] = str(request.form['email'])

    #Check password
    if request.form['password'] == '':
        flash('Password cannot be blank', 'loginError')
        errors += 1
        pass
    else:
        session['password'] = str(request.form['password'])

        #See if there are any errors
    if errors > 0:
        session['password'] = ''
        return False
    else:
        return True

def setUserId():
    getUserId = "SELECT id FROM users WHERE email = '{}'".format(session['email'])
    id = mysql.query_db(getUserId)
    session['id'] = id[0]['id']
    return True

# def checkIfEmailExists():
#     getEmails = "SELECT email FROM users WHERE email = '{}'".format(session['email'])
#     emailList = mysql.query_db(getEmails)
#     if emailList == None:
#         return False
#     else:
#         return True

@app.route('/')
def index():
    # if session['first_name'] == None:
    #     session['first_name'] = ''
    # # if session['last_name'] == None:
    # #     session['last_name'] = ''
    # if session['email'] == None:
    #     session['email'] = ''
    # if session['password'] == None:
    #     session['password'] = ''
    # # if session['confirm_password'] == None:
    # #     session['confirm_password'] = ''
    # if session['id'] == None:
    #     session['id'] = ''
    # if session['loggedin'] == None:
    #     session['loggedin'] = False
    return render_template("login.html")

@app.route('/login', methods=['post'])
def login():
    if validateLogin() == False:
        session['loggedin'] = False
        return redirect('/')
    # query = "SELECT id, first_name, password FROM users WHERE email = '{}'".format(session['email'])
    # user = mysql.query_db(query)
    else:
        print "you made it to query2!"
        userInfo = mysql.query_db("SELECT id, first_name, password FROM users WHERE email = '{}'".format(session['email']))
        if userInfo:
            inputPassword = request.form['password']
            if bcrypt.check_password_hash(userInfo[0]["password"], inputPassword):
                print "you entered correct password"
                session['loggedin'] = True
                session["id"] = userInfo[0]["id"]
                session["first_name"] = userInfo[0]["first_name"]
                return redirect("/wall")
            else:
                flash('Password does not match what we have on file', 'pwError')
                print "Passwords didn't match"
        else:
            flash('No user with that email exists. Please create new user.','logEmailError')
            return redirect('/')
    return redirect('/wall')

@app.route('/wall')
def thewall():
    if session['loggedin'] == True:
        setUserId()
        getMsg()
        getComments()
        return render_template("theWall.html")
    else:
        return redirect('/')

@app.route("/post_message", methods=['POST'])
def addMessage():
    query = 'INSERT INTO messages (message, created_at, updated_at, users_id) VALUES (:new_message, NOW(), NOW(), :user_id)'
    data = {
    "new_message": request.form["message"],
    "user_id": session["id"]
    }
    mysql.query_db(query, data)
    return redirect('/wall')

@app.route('/the_reg')
def register():
    return render_template("register.html")

@app.route('/create_user', methods=['POST'])
def newUser():
    print "new user function started"
    test = validate()
    print test
    if test == True:
        query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (:first_name, :last_name, :email, :password, NOW(), NOW())"
        # encrypt the password first
        pword = request.form['password']
        password = bcrypt.generate_password_hash(pword)
        data = {
            'first_name': request.form['fname'],
            'last_name':  request.form['lname'],
            'email': request.form['email'],
            'password': password
            }
        mysql.query_db(query,data)
        return redirect('/wall')
    else:
        print "had errors"
        return redirect('/the_reg')

@app.route('/logout')
def clear():
    session.clear()
    # session['first_name'] = ''
    # session['last_name'] = ''
    # session['email'] = ''
    # session['password'] = ''
    # session['confirm_password'] = ''
    # session['userid'] = ''
    session['loggedin'] = False
    return redirect('/')

@app.route("/leave_comment/<msgID>", methods=["POST"])
def addComment(msgID):
    query = "INSERT INTO comments (messages_id, users_id, comment, created_at, updated_at) VALUES (:messages_id, :users_id, :new_comment, NOW(), NOW())"
    data = {
    "messages_id": msgID,
    "users_id": session["id"],
    "new_comment": request.form["addComment"]
    }
    mysql.query_db(query, data)
    return redirect("/wall")

app.run(debug=True)
