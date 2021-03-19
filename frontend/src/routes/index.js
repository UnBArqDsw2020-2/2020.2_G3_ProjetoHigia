import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useAuth } from '../context/auth';
import AppRoutes from '../routes/app.routes';
import AuthRoutes from '../routes/auth.routes';

const Routes = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return true ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
