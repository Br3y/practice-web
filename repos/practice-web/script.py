# Defining the given variables
P = 101  # principal amount in USDT
r = 3  # annual interest rate in decimal
n = 365  # number of times interest is compounded per year
t = 60 / 365  # time the money is invested for in years

# Calculating the final amount using the compound interest formula
A = P * (1 + r / n) ** (n * t)
print(A)
