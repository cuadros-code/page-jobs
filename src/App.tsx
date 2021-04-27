import AuthStateProvider from "./context/auth/AuthState"
import AppRouter from "./routes/AppRouter"

const App = () => {
  return (
    <>
    <AuthStateProvider>
     <AppRouter /> 
    </AuthStateProvider>
    </>
  )
}

export default App
