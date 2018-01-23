from django.core.exceptions import ValidationError
from .src.utils.helper import is_key


def validate_provider_field(instance):
    pass


def clean_primary_key(instance, force_insert, force_update):
    _id = instance.pk
    if _id is None:
        # INSERT operation - autoincrement primary key
        # don't need to check
        pass
    else:
        if is_key(_id):
            if not force_update and (instance.objects.filter(id=_id).exists() or force_insert):
                raise ValidationError("User already exist")
            else:
                pass
        else:
            raise ValueError("Invalid key number")
