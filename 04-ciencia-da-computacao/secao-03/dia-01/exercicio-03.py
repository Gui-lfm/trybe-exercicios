import collections
from abc import ABC, abstractmethod

# Implemente a classe Televisão


class Televisao:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, new_channel):
        if new_channel < 1 or new_channel > 99:
            raise ValueError("Canal não disponvível")
        self.__canal = new_channel
        print(f"Você mudou para o canal {self.__canal}")

    def ligar_desligar(self):
        self.__ligada = not self.__ligada


# pt.2: Implemente uma classe Estatistica


class Estatistica:
    def __init__(self, numbers: list[int]):
        self.__numbers = numbers

    def media(self):
        quantidade = len(self.__numbers)
        total = sum(number for number in self.__numbers)
        return format((total / quantidade), ".2f")

    def mediana(self):
        sortedList = sorted(self.__numbers)
        middle = len(sortedList) // 2
        if len(sortedList) % 2 == 0:
            return format(
                (sortedList[middle] + sortedList[middle - 1]) / 2, ".2f")
        return sortedList[middle]

    def moda(self):
        return collections.Counter(self.__numbers).most_common()[0][0]


lista = [1, 2, 3, 4, 5, 5]

teste = Estatistica(lista)

print("Lista:", lista)
print("media da lista:", teste.media())
print("mediana da lista:", teste.mediana())
print("moda da lista:", teste.moda())

# abstração - Implemente as classes das figuras geométricas


class FiguraGeometrica(ABC):
    @abstractmethod
    def area():
        pass

    @abstractmethod
    def perimetro():
        pass


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        super().__init__()
        self.__lado = lado

    def area(self):
        return self.__lado**2

    def perimetro(self):
        return self.__lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        super().__init__()
        self.__base = base
        self.__altura = altura

    def area(self):
        return self.__base * self.__altura

    def perimetro(self):
        return 2 * (self.__base * self.__altura)


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        super().__init__()
        self.__raio = raio

    def area(self):
        return 3.14 * (self.__raio ** 2)

    def perimetro(self):
        return 2 * 3.14 * self.__raio
