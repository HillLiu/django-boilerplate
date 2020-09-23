from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from django.utils.decorators import method_decorator


@method_decorator(never_cache, name='dispatch')
class HomePage(TemplateView):
    template_name = 'site.html'

    def get_context_data(self, **kwargs):
        import json

        context = super().get_context_data(**kwargs)
        contextData = context.copy()
        del contextData['view']
        context['context_data'] = json.dumps(contextData)
        return context

class Configure(TemplateView):
    template_name = 'conf.ini'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

    def render_to_response(self, context, **response_kwargs):
        from django.utils.translation import activate, LANGUAGE_SESSION_KEY
        if self.request.GET.get('l', None):
            self.request.session[LANGUAGE_SESSION_KEY] = self.request.GET['l']
            activate(self.request.GET['l'])

        return super().render_to_response(context, **response_kwargs)
