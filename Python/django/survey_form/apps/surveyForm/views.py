from django.shortcuts import render, redirect

def index(request):
    if not 'count' in request.session:
        request.session['count'] = 0
    return render(request,'surveyForm/index.html')

def formSubmit(request):
    if request.method == 'POST':
        print "post request triggered"
        request.session['count'] += 1
        request.session['name'] = request.POST['name']
        request.session['location'] = request.POST['location']
        request.session['language'] = request.POST['language']
        request.session['comment'] = request.POST['comment']
        return redirect ('/results')
    else:
        return redirect ('/')

def results(request):
    return render(request,'surveyForm/survey_sent.html')

def clear(request):
    del request.session['name']
    del request.session['location']
    del request.session['language']
    del request.session['comment']
    return redirect('/')
