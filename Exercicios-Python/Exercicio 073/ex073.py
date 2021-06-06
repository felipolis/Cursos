"""
    Crie uma tupla preenchida com os 20 primeiros colocados da Tabela do Campeonato Brasileiro de
Futebol, na ordem de colocação. Depois mostre:

    a) Os 5 primeiros times.
    b) Os últimos 4 colocados.
    c) Times em ordem alfabética.
    d) Em que posição está o time da Chapecoense.

"""

times = ('Palmeiras', 'Flamengo', 'Internacional', 'Grêmio', 'São Paulo',
         'Atlético Mineiro', 'Atlético-PR', 'Cruzeiro', 'Botafogo', 'Santos',
         'Bahia', 'Corinthians', 'Fluminense', 'Ceará', 'Vasco da Gama', 'Sport Recife',
         'América-MG', 'Chapecoense', 'Vitória', 'Paraná')

print("-=" * 15)
print(f"Lista de times do braliseirão: {times}")
print("-=" * 15)
print(f"Os 5 primeiros são: {times[0:5]}")
print("-=" * 15)
print(f"Os 4 ultimos são: {times[-4:]}")
print("-=" * 15)
print(f"Times em ordem alfabetica: {sorted(times)}")
print("-=" * 15)
print(f"Chapecoense esta na {times.index('Chapecoense') + 1}ª posição")
