class Eletrodomestico:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    @property
    def cor(self):
        return self.__cor

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


# criar as classes Secador, Batedeira e MaquinaDeLavar usando herança

class Secador(Eletrodomestico):
    pass

    def __str__(self):
        return f"secador da cor {self.cor} no valor de R${self.preco}"


class Batedeira(Eletrodomestico):
    pass

    def __str__(self):
        return f"batedeira {self.cor}, potencia {self._potencia}W"


class MaquinaDeLavar(Eletrodomestico):
    pass

    def __str__(self):
        return f"Máquina de lavar no valor de R${self.preco}, {self._tensao}V"


meu_secador = Secador('azul', 200, 150, 100)
minha_maquina_de_lavar = MaquinaDeLavar('branca', 200, 220, 800)
minha_batedeira = Batedeira('Vermelha', 200, 220, 400)

print(meu_secador)
print(minha_maquina_de_lavar)
print(minha_batedeira)
