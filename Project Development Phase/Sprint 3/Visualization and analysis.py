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


# In[ ]:
