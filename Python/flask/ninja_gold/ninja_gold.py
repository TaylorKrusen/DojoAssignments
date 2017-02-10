from flask import Flask, render_template, request, redirect, session, flash
import random
app = Flask(__name__)
app.secret_key = 'theKey'

@app.route('/')
def index():
    if 'gold' not in session:
        session['gold'] = 0
    if 'activities' not in session:
        session['activities'] = []
    return render_template('ninja_gold.html')

# @app.route('/process_money')
# def money():


@app.route('/clear', methods=['POST'])
def clear():
    session.clear()
    return redirect('/')

app.run(debug=True)
