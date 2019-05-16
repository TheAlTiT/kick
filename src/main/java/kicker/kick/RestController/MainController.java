package kicker.kick.RestController;

import kicker.kick.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.view.RedirectView;

@Controller
@RequestMapping
public class MainController {
    @Autowired
    GameRepository gameRepository;

    @GetMapping("/")
    public String main() {
        return "main";
    }

    @GetMapping("/main")
    public RedirectView locred() {
        RedirectView redirectView = new RedirectView();
        redirectView.setUrl("/");
        return redirectView;
    }
}
