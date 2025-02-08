import numpy as np

# def cost_function(a_in, y_train, W, b):
#     m = a_in.shape[0]
#     a = sigmoid(a_in)
#     for i in range(m):
#         loss = -y_train[i]*np.log(a[i]) - (1-y_train[i])*np.log(1-a[i])
#         total_cost += loss
#     total_cost = total_cost/m
#     return total_cost

# def my_sigmoid(z):
#     N = z.shape[0]
#     a = np.zeros((N))
#     for i in range(N):
#         a[i] = 1/(1+np.exp(-z[i]))
#     return a

def sigmoid(z):
    return 1/(1+np.exp(-z))





