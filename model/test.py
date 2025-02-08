import numpy as np
import pandas as pd
from functions import sigmoid, cost_function

def compute_gradient(X_train, y_train, W, b):
    # m = X_train.shape[0]
    # n = X_train.shape[1]
    m, n = X_train.shape
    dj_dw = np.zeros(n)
    dj_db = 0
    for i in range(m):
        z  = np.dot(X_train, W) + b
        a = sigmoid(z)
        dj_db += (a[i] - y_train[i])
        for j in range(n):
            dj_dw[j] += (a[i] - y_train[i])*X_train[i][j]
    dj_dw = dj_dw/m
    dj_db = dj_db/m
    return dj_dw, dj_db

def gradient_descent(X_train, y_train, w_in, b_in, alpha, num_iter):
    for i in range(num_iter):
        dj_dw, dj_db = compute_gradient(X_train, y_train, w_in, b_in)
        w_in[i]
        # w_in = w_in - alpha*dj_dw
        # b_in = b_in - alpha*dj_db
    return w_in, b_in