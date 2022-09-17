from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from django.utils.decorators import method_decorator
from django.conf import settings


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
        response = super().render_to_response(context, **response_kwargs)
        if self.request.GET.get('l', None):
            lang_code = self.request.GET['l']
            self.request.session[LANGUAGE_SESSION_KEY] = lang_code
            activate(lang_code)
            response.set_cookie(
                settings.LANGUAGE_COOKIE_NAME,
                lang_code,
                max_age=settings.LANGUAGE_COOKIE_AGE,
                path=settings.LANGUAGE_COOKIE_PATH,
                domain=settings.LANGUAGE_COOKIE_DOMAIN,
                secure=settings.LANGUAGE_COOKIE_SECURE,
                httponly=settings.LANGUAGE_COOKIE_HTTPONLY,
                samesite=settings.LANGUAGE_COOKIE_SAMESITE,
            )

        return response
