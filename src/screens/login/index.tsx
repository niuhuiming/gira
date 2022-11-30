import { Button, Card, Form, Input } from "antd";

const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = () => {
  const login = (param: { username: string; password: string }) => {
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }).then(async (response) => {
      if (response.ok) {
      }
    });
  };

  const handleSubmit = (value: { username: string; password: string }) => {
    login(value);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card>
        <Form onFinish={handleSubmit}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input placeholder="用户名" type="text" id={"username"} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input placeholder="密码" type="password" id={"password"} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
