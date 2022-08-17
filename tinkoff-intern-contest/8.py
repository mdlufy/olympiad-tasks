domainsCount, customersCount = map(int, input().split())

purchasedDomains = []

for i in range(domainsCount):
    domain = input()

    purchasedDomains.append(domain)

for i in range(customersCount):
    firstString, secondString = input().split()

    suitableDomainsCount = 0

    for domain in purchasedDomains:
        if domain.startswith(firstString) and domain.endswith(secondString):
            suitableDomainsCount += 1

    print(suitableDomainsCount)