import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '..';
// Asegúrate de ajustar la ruta si tu store está en una ubicación diferente

// Use estos hooks tipados en lugar de los no tipados
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
