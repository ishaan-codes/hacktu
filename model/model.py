# Import the necessary libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import tensorflow as tf
from tensorflow.python.keras.models import Sequential
from tensorflow.python.keras.layers import Dense
from tensorflow.python.keras.optimizer_v1 import Adam
from tensorflow.python.keras.losses import BinaryCrossentropy
from tensorflow.python.keras.activations import sigmoid
# from functions import cost_function

# Load the data
df = pd.read_csv('../dataset/Fraudulent_E-Commerce_Transaction_Data.csv')
X_train = np.empty((0,9), int)
y_train = np.empty((0,1), int)

for i in range (0,500):
    X = df.loc[i, ['Transaction Amount', 'Payment Method', 'Product Category', 'Quantity', 'Customer Age', 'Customer Location', 'Device Used', 'Account Age Days', 'Transaction Hour']]
    y = df.loc[i, ['Is Fraudulent']]
    arr1 = X.to_numpy()
    arr2 = y.to_numpy()
    X_train = np.vstack((X_train, arr1))
    y_train = np.vstack((y_train, arr2))

print(X_train.shape)
print(y_train.shape)

# Define the model
def my_dense(a_in, W, b):
    units = W.shape[1]
    a_out = np.zeros(units)
    for i in range(units):
        z = np.dot(a_in, W[:,i]) + b[i]
        a_out[i] = sigmoid(z)
    return a_out

#w1 shape = (9, 128)
#b1 shape = (128, )
#w2 shape = (128, 64)
#b2 shape = (64, )
#w3 shape = (64, 32)
#b3 shape = (32, )

model = Sequential(
    [
        tf.keras.Input(shape=(9, )),
        Dense(128,  activation='sigmoid'),
        Dense(64, activation='sigmoid'),
        Dense(32, activation='sigmoid')
    ], name = 'my_model'
)

model.compile(optimizer=Adam(0.001), loss=BinaryCrossentropy())
model.fit(X_train, y_train, epochs=10)

# Sequential model

def my_sequential(X, W1, b1, W2, b2, W3, b3):
    a1 = my_dense(X, W1, b1)
    a2 = my_dense(a1, W2, b2)
    a3 = my_dense(a2, W3, b3)
    return a3

Prediction = my_sequential()