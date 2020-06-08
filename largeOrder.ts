# looking for large options order placement

def agg = AggregationPeriod.MIN; 
def currentOpenInterest = open_interest(GetSymbol(), agg, "Last");

def agg = AggregationPeriod.TWO_MIN; 
def previousOpenInterest = open_interest(GetSymbol(), agg, "Last");

def delta = previousOpenInterest - currentOpenInterest;
plot delta;
