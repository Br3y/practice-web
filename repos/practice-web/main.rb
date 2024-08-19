# Initial parameters
principal = 0
initial_rate = 0.0954
lower_rate = 0.0441
daily_contribution = 80.0
days_in_year = 365

# Daily interest rates
initial_daily_rate = initial_rate / 365
lower_daily_rate = lower_rate / 365

# Balance initialization
balance = principal

# Simulation over 1 year (365 days)
days_in_year.times do |day|
  # Apply appropriate interest rate
  if balance < 500
    balance *= (1 + initial_daily_rate)
  else
    balance *= (1 + lower_daily_rate)
  end
  
  # Add daily contribution
  balance += daily_contribution
end

puts "Final balance after 1 year: $#{'%.2f' % balance}"