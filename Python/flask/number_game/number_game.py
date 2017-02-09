from flask import Flask, render_template, request, redirect, session, flash
import random
app = Flask(__name__)
app.secret_key = 'theKey'

@app.route('/')
def index(): #assigns our winning number on page load
    if 'secretNum' not in session:
        session['secretNum']=random.randrange(0,101)
        print session['secretNum']
    return render_template('number_game.html')

@app.route('/guess', methods=['POST'])
def play_the_game():
    userGuess = request.form['guess']
    if userGuess.isdigit():
        num=int(userGuess)
        if num == session['secretNum']:
            session['user'] = "win"
            session['phrase'] = "Winner winner... Show off."
            return redirect ('/')
        elif num > session['secretNum']:
            session['user'] = "higher"
            session['phrase'] = "Like a rebelious teenager, you're too high..."
        else:
            session['user'] = "lower"
            session['phrase'] = "You're too low. Potato."
    else:
        flash('Not a number! You lose.')
    return redirect('/')

@app.route('/clear', methods=['POST'])
def clear(): #ads a button to reset the counter and start a new game
    #session.pop('secretNum')
    session.clear()
    flash('You gave up. I won. YES.')
    return redirect('/')

app.run(debug=True)
