from ninja import NinjaAPI
from ninjaauth.api import router as auth_router


api = NinjaAPI(csrf=True)
api.add_router('/auth/', auth_router)


@api.get("/hello")
def hello(request):
    return "Hello world"
