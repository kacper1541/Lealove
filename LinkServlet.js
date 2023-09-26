import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/LinkServlet")
public class LinkServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // Your logic to generate the dynamic link goes here
    String dynamicLink = "https://www.youtube.com/"; // Replace with your actual dynamic link

    // Set the response content type to plain text
    response.setContentType("text/plain");

    // Write the dynamic link to the response
    response.getWriter().write(dynamicLink);
}
}
