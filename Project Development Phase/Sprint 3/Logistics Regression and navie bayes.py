#!/usr/bin/env python
# coding: utf-8

# In[2]:


import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import warnings
warnings.filterwarnings('ignore')


# In[4]:


df=pd.read_csv('Downloads/Heart_Disease_Prediction.csv')


# In[5]:


df.head()


# In[6]:


df.isnull().sum()


# In[7]:


print(df.info())


# In[9]:


plt.figure(figsize=(20,10))
sns.heatmap(df.corr(), annot=True, cmap='terrain')


# In[10]:


sns.pairplot(data=df)


# In[11]:


df.hist(figsize=(10,12), layout=(5,4));


# In[13]:


df.plot(kind='box', subplots=True, layout=(6,3), figsize=(10,10))
plt.show()


# In[19]:


sns.catplot(data=df, x='Sex', y='Age', hue='Heart Disease', palette='tab10')


# In[20]:


sns.barplot(data=df, x='Sex', y='Cholesterol', hue='Heart Disease', palette='spring')


# In[21]:


df['Sex'].value_counts()


# In[22]:


df['Chest pain type'].value_counts()


# In[23]:


sns.countplot(x='Chest pain type', hue='Heart Disease' , data=df, palette='rocket')


# In[24]:


gen = pd.crosstab(df['Sex'], df['Heart Disease'])
print(gen)


# In[25]:


gen.plot(kind='bar', stacked='True', color=['green','blue'],grid=False)


# In[42]:


from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
StandardScaler = StandardScaler()
columns_to_scale=['Age', 'EKG results', 'Cholesterol', 'Thallium', 'Number of vessels fluro']
df[columns_to_scale] = StandardScaler.fit_transform(df[columns_to_scale])


# In[43]:


df.head()


# In[44]:


from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
StandardScaler = StandardScaler()
columns_to_scale=['Age', 'EKG results', 'Cholesterol', 'Thallium', 'Number of vessels fluro']
df[columns_to_scale] = StandardScaler.fit_transform(df[columns_to_scale])


# In[45]:


df.head()


# In[47]:


x=df.drop(['Heart Disease'], axis=1)
y=df['Heart Disease']


# In[48]:


x_train, x_test, y_train, y_test=train_test_split(x,y,test_size=0.3, random_state=40)


# In[49]:


print('x_train-', x_train.size)
print('x_test-', x_test.size)
print('y_train-', y_train.size)
print('x_test-', x_test.size)


# In[73]:



from sklearn.linear_model import LogisticRegression
lr=LogisticRegression()
model1=lr.fit(x_train,y_train)
prediction1=model1.predict(x_test)


# In[54]:


from sklearn.metrics import confusion_matrix
cm=confusion_matrix(y_test,prediction1)
cm


# In[56]:


sns.heatmap(cm, annot=True,cmap='BuPu')


# In[60]:


TP=cm[0][0]
TN=cm[1][1]
FN=cm[1][0]
FP=cm[0][1]
print('Testing Accuracy:', (TP+TN+FN)/(TP+TN+FN+FP))


# In[70]:


from sklearn.metrics import accuracy_score
accuracy_score(y_test,prediction1)


# In[62]:


from sklearn.metrics import classification_report
print(classification_report(y_test, prediction1))


# In[77]:



print('NB  :', accuracy_score(y_test, prediction1))
