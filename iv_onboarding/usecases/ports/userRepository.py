from abc import ABC, abstractmethod
from domain.entities.user import User

class UserRepository(ABC):
    @abstractmethod
    def create(self, user: User):
        raise (NotImplementedError)

    @abstractmethod
    def find_by_email(self, user_email):
        raise (NotImplementedError)
    
    @abstractmethod
    def find_by_id(self, id):
        raise (NotImplementedError)
    
    @abstractmethod
    def find_all(self):
        raise (NotImplementedError)

    @abstractmethod
    def update(self, index, user: User) -> User:
        raise (NotImplementedError)
