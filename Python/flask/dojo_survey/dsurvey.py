from flask import Flask, render_template, request, redirect
app = Flask(__name__)
# our index route will handle rendering our form
@app.route('/')
def index():
  return render_template("dojo_survey.html")

# this route will handle our form submission
@app.route('/result', methods=['POST'])
def create_user():
    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comment = request.form['comment']

    return render_template("dojo_results.html", name=name, location=location, language=language, comment=comment)
app.run(debug=True) # run our server
