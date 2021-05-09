import AuthStateProvider from "./context/auth/AuthState"
import PostStateProvider from "./context/post/PostState"
import AppRouter from "./routes/AppRouter"

const App = () => {
  return (
    <>
    <AuthStateProvider>
      <PostStateProvider>
        <AppRouter /> 
      </PostStateProvider> 
    </AuthStateProvider>
    </>
  )
}

export default App
