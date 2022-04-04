import { LandingPage } from 'pages';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Rota from './rota';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rota element={<LandingPage />} />} />
        <Route path="*" element={<Rota element={<Navigate to="/" />} />} />
      </Routes>
    </BrowserRouter>
  );
};
