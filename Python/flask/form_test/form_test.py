from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

@app.route('/')
def index():
    return render_template("form.html")
# this route will handle our form submission
# notice how we defined which HTTP methods are allowed by this route
@app.route('/users', methods=['POST'])
def create_user():
    print "Got Post Info"
   # you can assign temporary variables to form values like the ones below:
   # name = request.form['name']
   # email = request.form['email']
   # and use something like this: return render_template('users.html', name=name, email=email)
    session['name'] = request.form['name']
    session['email'] = request.form['email']
    return redirect('/show')

@app.route('/show')
def show_user():
    return render_template('users.html')#, name=session['name'], email=session['email'])

app.run(debug=True) # run our server
