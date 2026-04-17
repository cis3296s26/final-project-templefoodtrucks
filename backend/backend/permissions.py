# This file will manage permissions for the food truck application
# It defines custom permissions for users to access and modify food truck data
from rest_framework import permissions

# This class defines a custom permission that allows only the owner of a food truck to edit it, 
# while allowing anyone to read it
class ownerOrReadOnly(permissions.BasePermission):

    # Function to check if the user has permission to perform the action
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request
        # so we will always allow GET, HEAD or OPTIONS requests
        if request.method in permissions.SAFE_METHODS:
            return True

        # If the food truck has no owner, only allow superusers to edit it
        if obj.owner is None:
            return request.user.is_superuser

        # Write permissions are only allowed to the owner of the food truck or superusers
        return obj.owner == request.user or request.user.is_superuser