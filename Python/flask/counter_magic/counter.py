from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'newKey'

def viewCounter():
    try:
        session['counter'] += 1
    except KeyError: #this is where we are declaring our variable and starting our counter
        session['counter'] = 1

@app.route('/')
def index():
    viewCounter()
    return render_template('counter_magic.html', count=session['counter'])

@app.route('/addtwo', methods=['POST'])
def increment_by_two():
    session['counter'] += 1 #We only add 1 because the page reload counts as another 1 for a total of 2 counts went you press the button
    return redirect('/')

@app.route('/clearcounter', methods=['POST'])
def clear():
    session['counter'] = 0
    return redirect('/')

app.run(debug=True)
