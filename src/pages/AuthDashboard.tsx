
type AuthDashboardProps = {
    userName: string,
    userEmail: string
}

export function AuthDashboard({userName, userEmail}: AuthDashboardProps) {
  return (
    <>
        <p>{userName}: {userEmail}</p>
        <h1>AuthDashboard... you signed in successfully</h1>
        <p>In the future you will see a very nice dashboard with a big button to create a new textDoc</p>
    </>
  )
}
