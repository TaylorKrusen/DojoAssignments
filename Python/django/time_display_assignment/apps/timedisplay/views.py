from django.shortcuts import render, HttpResponse
import time
# Create your views here.
def index(request):
    clock = {
    "current_date":time.strftime("%b/%d/%Y"),
    "current_time":time.strftime("%I:%M %p")
}
    return render(request, "timedisplay/index.html", clock)
