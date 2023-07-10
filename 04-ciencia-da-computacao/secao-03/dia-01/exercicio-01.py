class Ventilador:
    def __init__(self, potencia, preco, tensao, cor):
        self.__potencia = potencia
        self.preco = preco
        self.__tensao = tensao
        self.__cor = cor
        self.__ligado = False


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.ventilador = None

    def comprar_ventilador(self, ventilador: Ventilador):
        if ventilador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= ventilador.preco
            self.ventilador = ventilador

    def __str__(self):
        if self.ventilador:
            return f"{self.nome} - possui um ventilador."
        return f"{self.nome} - não possui um ventilador."


ventilador_azul = Ventilador(250, 150, 220, cor='azul')

guilherme = Pessoa('gui', 100)

guilherme.comprar_ventilador(ventilador_azul)
print(guilherme)
