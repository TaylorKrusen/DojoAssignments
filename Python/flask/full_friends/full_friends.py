from flask import Flask, render_template, redirect, request, session, flash
import re
from mysqlconnection import MySQLConnector
emailRegex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"
mysql = MySQLConnector(app, 'friendships_assignment')

@app.route('/')
def index():
    friends = mysql.query_db("SELECT * FROM users")
    return render_template("friends_full.html", list=friends)

@app.route('/friends', methods=['POST'])
def create():
    errors = 0
    # Check for empty first name...
    if request.form['first_name'] == '':
        flash('I demand your First Name!', 'fname_Error')
        errors += 1
        pass
    else:
        session['first_name'] = request.form['first_name']
    # Check for empty last name...
    if request.form['last_name'] == '':
        flash('How dare you not give me your Last Name!', 'lname_Error')
        errors += 1
        pass
    else:
        session['first_name'] = request.form['first_name']
    # Check for empty or invalid email...
    if request.form['email'] == '':
        flash('I need your email. Please. Please. PLEASE?!', 'emailError')
        errors += 1
        pass
    elif not emailRegex.match(request.form['email']):
        flash('Nice try, but give me that REAL email please.', 'emailError')
        errors += 1
        pass
    else:
        session['email'] = request.form['email']

    return redirect('/')

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
