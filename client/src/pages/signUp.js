import { Stack, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <Container style={{ height: "80vh" }}>
            <Stack direction="horizontal" gap={3} style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", marginTop: "50px", marginBottom: "50px" }}>
                <Container style={{ height: "80%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <h1>Sign Up as a maid</h1>
                    <Button variant="dark" style={{ marginTop: "20px" }}>
                        <Link
                            to="/maidSignup"
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            Sign Up
                        </Link>
                    </Button>{' '}
                </Container>
                <div className="vr" />
                <Container style={{ height: "80%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <h1>Sign Up as a customer</h1>
                    <Button variant="dark" style={{ marginTop: "20px" }}>
                        <Link
                            to="/customerSignup"
                            style={{ textDecoration: "none", color: "inherit", marginTop: "10px" }}
                        >
                            Sign Up
                        </Link>
                    </Button>{' '}
                </Container>
            </Stack>
        </Container>
    )
}

export default SignUp