from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from .models import Choice, Question

def index(request):
    return render(request, 'polls/index.html', {})

def about(request):
    return render(request, 'polls/about.html', {})
def howto(request):
    return render(request, 'polls/howto.html', {})
def quickfacts(request):
    return render(request, 'polls/quickfacts.html', {})
def action(request):
    return render(request, 'polls/action.html', {})


def questions(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    context = {'latest_question_list': latest_question_list}
    return render(request, 'polls/questions.html', context)

def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/detail.html', {'question': question})

def results(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/results.html', {'question': question})

def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    num_selected = 0
    for post_key, post_value in request.POST.items():
        if post_key.startswith("choice"):
            selected_choice = question.choice_set.get(pk=post_value)
            selected_choice.votes += 1
            selected_choice.save()
            num_selected += 1
    if num_selected == 0:
        return render(request, 'polls/detail.html', {
            'question': question,
            'error_message': "You didn't select a choice.",
        })
    else:
        return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))
