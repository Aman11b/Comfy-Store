import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Form, Link } from "react-router-dom";
import { FormInput } from "../components";
import { Button } from "../components/ui/button";

function Register() {
  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted p-12">
        <CardHeader>
          <CardTitle className="text-center">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form>
            <FormInput type="text" name="username" defaultValue="test" />
            <FormInput type="email" name="email" defaultValue="test@test.com" />
            <FormInput type="password" name="password" defaultValue="secret" />
            <Button type="submit" className="w-full mt-4">
              Submit
            </Button>
            <p className="text-center mt-4">
              Already a member?{" "}
              <Button type="button" asChild variant="link">
                <Link to="/login">Login</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
export default Register;
