from flask import Flask, render_template, redirect, request, session, flash
import re
# from mysqlconnection import MySQLConnector
emailRegex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"
# mysql = MySQLConnector(app, 'friendships_assignment')

def validate():
    hasErrors = 0
    # Check for empty first name...
    if request.form['first_name'] == '':
        flash('I demand your First Name!', 'fname_Error')
        hasErrors += 1
        pass
    else:
        session['first_name'] = request.form['first_name']
    # Check for empty last name...
    if request.form['last_name'] == '':
        flash('How dare you not give me your Last Name!', 'lname_Error')
        hasErrors += 1
        pass
    else:
        session['first_name'] = request.form['first_name']
    # Check for empty or invalid email...
    if request.form['email'] == '':
        flash('I need your email. Please. Please. PLEASE?!', 'emailError')
        hasErrors += 1
        pass
    elif not emailRegex.match(request.form['email']):
        flash('Nice try, but give me that REAL email please.', 'emailError')
        hasErrors += 1
        pass
    else:
        session['email'] = request.form['email']
    # Check for password that is too short
    if len(request.form['password']) < 8:
        flash('Password must be longer than 8 characters!', 'pwordError')
        hasErrors += 1
        pass
    else:
        session['password'] = request.form['password']
    # Check for conf password and check for match
    if str(request.form['pass_confirm']) == '':
        flash('Please confirm your password', 'pword_confError')
        hasErrors += 1
        pass
    elif str(request.form['pass_confirm']) != str(request.form['password']):
        flash('Passwords do not match', 'pword_confError')
        hasErrors += 1
    else:
        session['confirm_password'] = str(request.form['pass_confirm'])
#     #Why can't I check for exisint errors like this?
#     if hasErrors > 0:
#         session['password'] = ''
#         session['confirm_password'] = ''
#         flash('hasErrors detected. Did not add user.', 'noUser')
#         return False
#     else:
#         return True

@app.route('/')
def index():
    # friends = mysql.query_db("SELECT * FROM users")
    return render_template("registration.html")

@app.route('/register', methods=['POST'])
def create():
    validate()
    # if hasErrors == 0:
    #     query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (:first_name, :last_name, :email, :password, NOW(), NOW())"
    #     data = {
    #          'first_name': request.form['first_name'],
    #          'last_name':  request.form['last_name'],
    #          'email': request.form['email'],
    #          'password': request.form['password']
    #        }
    #     mysql.query_db(query,data)
    #     return render_template("loggedin.html")
    # return redirect('/')

@app.route('/friends/<id>/edit', methods=['GET'])
def edit(id):
    return render_template('friends_edit.html')

@app.route('/friends/<id>', methods=['POST'])
def update(id):
    return redirect('/')

@app.route('/friends/<id>/delete', methods=['POST'])
def destroy(id):
    return redirect('/')

app.run(debug=True)
