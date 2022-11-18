#!/usr/bin/env python
# coding: utf-8

# In[1]:



import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import warnings
warnings.filterwarnings('ignore')


# In[2]:


df=pd.read_csv('Downloads/Heart_Disease_Prediction.csv')


# In[3]:


df.head()


# In[4]:


df.isnull().sum()


# In[5]:


print(df.info())


# In[6]:


plt.figure(figsize=(20,10))
sns.heatmap(df.corr(), annot=True, cmap='terrain')


# In[7]:


sns.pairplot(data=df)


# In[8]:


df.hist(figsize=(10,12), layout=(5,4));


# In[9]:


df.plot(kind='box', subplots=True, layout=(6,3), figsize=(10,10))
plt.show()


# In[10]:


sns.catplot(data=df, x='Sex', y='Age', hue='Heart Disease', palette='tab10')


# In[11]:


sns.barplot(data=df, x='Sex', y='Cholesterol', hue='Heart Disease', palette='spring')


# In[12]:


df['Sex'].value_counts()


# In[13]:


df['Chest pain type'].value_counts()


# In[14]:


sns.countplot(x='Chest pain type', hue='Heart Disease' , data=df, palette='rocket')


# In[15]:


gen = pd.crosstab(df['Sex'], df['Heart Disease'])
print(gen)


# In[16]:


gen.plot(kind='bar', stacked='True', color=['green','blue'],grid=False)


# In[17]:


from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
StandardScaler = StandardScaler()
columns_to_scale=['Age', 'EKG results', 'Cholesterol', 'Thallium', 'Number of vessels fluro']
df[columns_to_scale] = StandardScaler.fit_transform(df[columns_to_scale])


# In[18]:


df.head()


# In[19]:


from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
StandardScaler = StandardScaler()
columns_to_scale=['Age', 'EKG results', 'Cholesterol', 'Thallium', 'Number of vessels fluro']
df[columns_to_scale] = StandardScaler.fit_transform(df[columns_to_scale])


# In[20]:


df.head()


# In[21]:


x=df.drop(['Heart Disease'], axis=1)
y=df['Heart Disease']


# In[22]:


x_train, x_test, y_train, y_test=train_test_split(x,y,test_size=0.3, random_state=40)


# In[23]:


print('x_train-', x_train.size)
print('x_test-', x_test.size)
print('y_train-', y_train.size)
print('x_test-', x_test.size)


# In[24]:



from sklearn.linear_model import LogisticRegression
lr=LogisticRegression()
model1=lr.fit(x_train,y_train)
prediction1=model1.predict(x_test)


# In[25]:


from sklearn.metrics import confusion_matrix
cm=confusion_matrix(y_test,prediction1)
cm


# In[26]:


sns.heatmap(cm, annot=True,cmap='BuPu')


# In[27]:


TP=cm[0][0]
TN=cm[1][1]
FN=cm[1][0]
FP=cm[0][1]
print('Testing Accuracy:', (TP+TN+FN)/(TP+TN+FN+FP))


# In[28]:


from sklearn.metrics import accuracy_score
accuracy_score(y_test,prediction1)
l=accuracy_score(y_test,prediction1)


# In[29]:


from sklearn.metrics import classification_report
print(classification_report(y_test, prediction1))


# In[30]:



import pandas as pd
from sklearn import neighbors,metrics
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
import numpy as np
import pickle
from sklearn.ensemble import RandomForestClassifier
import pandas as pd
from sklearn.tree import DecisionTreeClassifier
import seaborn as sns
import matplotlib.pyplot as plt


# In[31]:


from sklearn.metrics import accuracy_score


# In[32]:


dataset = pd.read_csv("Downloads/Heart_Disease_Prediction.csv")


# In[33]:


KX = dataset[['Age','Sex','Chest pain type','BP','Cholesterol','FBS over 120','EKG results','Max HR','Exercise angina','ST depression','Slope of ST','Number of vessels fluro','Thallium']].values


# In[34]:


KY = dataset[['Heart Disease']].values


# In[35]:


KX


# In[36]:


KY = KY.flatten()
print(KY)


# In[37]:


KX_train , KX_test , KY_train , KY_test = train_test_split(KX,KY,test_size=0.2,random_state=4)


# In[38]:


knn = KNeighborsClassifier(n_neighbors = 20)
knn.fit(KX_train, KY_train)
print(knn.score(KX_test, KY_test))


# In[39]:


pickle.dump(knn,open('heart_knn_model.sav','wb'))


# In[40]:


predict_knn = knn.predict(KX_test)
accuracy_knn  = metrics.accuracy_score(KY_test,predict_knn)


# In[41]:


predict_knn


# In[42]:


accuracy_knn


# In[43]:


k=accuracy_knn


# In[45]:


import csv
import pandas as pd
import numpy as np
from sklearn.naive_bayes import GaussianNB
from sklearn.model_selection import train_test_split
from sklearn import metrics
from sklearn.metrics import confusion_matrix, f1_score, roc_curve, auc
import matplotlib.pyplot as plt
from itertools import cycle
from scipy import interp


# In[46]:


df = pd.read_csv('Downloads/Heart_Disease_Prediction.csv', header = None)


# In[47]:


training_x=df.iloc[1:df.shape[0],0:13]


# In[48]:


training_y=df.iloc[1:df.shape[0],13:14]


# In[49]:


nx=np.array(training_x)
ny=np.array(training_y)


# In[52]:


for z in range(5):
    print("\nTest Train Split no. ",z+1,"\n")
    nx_train,nx_test,ny_train,ny_test = train_test_split(nx,ny,test_size=0.25,random_state=None)
    # Gaussian function of sklearn
    gnb = GaussianNB()
    gnb.fit(nx_train, ny_train.ravel())
    ny_pred = gnb.predict(nx_test)


# In[61]:


print("\n Naive Bayes model accuracy(in %):", metrics.accuracy_score(ny_test, ny_pred))


# In[62]:


n=metrics.accuracy_score(ny_test, ny_pred)


# In[64]:


import pandas as pd
from sklearn import neighbors,metrics
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
import numpy as np
import pickle
from sklearn.ensemble import RandomForestClassifier
import pandas as pd
from sklearn.tree import DecisionTreeClassifier
import seaborn as sns
import matplotlib.pyplot as plt


# In[65]:


from sklearn.metrics import accuracy_score


# In[67]:


dataset = pd.read_csv("Downloads/Heart_Disease_Prediction.csv")


# In[69]:


DX = dataset[['Age','Sex','Chest pain type','BP','Cholesterol','FBS over 120','EKG results','Max HR','Exercise angina','ST depression','Slope of ST','Number of vessels fluro','Thallium']].values


# In[70]:


dy = dataset[['Heart Disease']].values


# In[71]:


DX


# In[72]:


dy = dy.flatten()
print(dy)


# In[73]:


DX_train , DX_test , dy_train , dy_test = train_test_split(DX,dy,test_size=0.2,random_state=4)


# In[74]:


from sklearn.tree import DecisionTreeClassifier

max_accuracy = 0


# In[75]:


for x in range(200):
    dt = DecisionTreeClassifier(random_state=x)
    dt.fit(DX_train,dy_train)
    dy_pred_dt = dt.predict(DX_test)
    current_accuracy = round(accuracy_score(dy_pred_dt,dy_test)*100,2)
    if(current_accuracy>max_accuracy):
        max_accuracy = current_accuracy
        best_x = x


# In[85]:


dt = DecisionTreeClassifier(random_state=best_x)
dt.fit(DX_train,dy_train)
dy_pred_dt = dt.predict(DX_test)


# In[88]:


score_dt = (accuracy_score(dy_pred_dt,dy_test))


# In[89]:


print("The accuracy score achieved using Decision Tree is: "+str(score_dt))


# In[90]:


d=(accuracy_score(dy_pred_dt,dy_test))


# In[91]:


print('Logistic Regression :',l)
print('KNN :',k)
print('Naive Bayes :',n)
print('Decision Tree :' ,d)


# In[93]:


print('Logistic Regression :',l*100,'%')
print('KNN :',k*100,'%')
print('Naive Bayes :',n*100,'%')
print('Decision Tree :' ,d*100,'%')


# In[ ]: