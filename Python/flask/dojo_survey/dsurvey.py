from flask import Flask, render_template, request, redirect, flash
app = Flask(__name__)
app.secret_key = 'dooky'
# our index route will handle rendering our form
@app.route('/')
def index():
  return render_template("dojo_survey.html")

# this route will handle our form submission
@app.route('/result', methods=['POST'])
def create_user():
    errors = False
    if len(request.form['name']) < 1:
        errors = True
        flash("Name can't be blank")
    if len(request.form['comment']) < 1:
        errors = True
        flash("Comment can't be blank")
    if len(request.form['comment']) > 120:
        errors = True
        flash("Comment shouldn't be longer than 120 characters")
    if errors:
        return redirect('/')

    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comment = request.form['comment']

    return render_template("dojo_results.html", name=name, location=location, language=language, comment=comment)
app.run(debug=True) # run our server
