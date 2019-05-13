package kicker.kick.RestController;

import kicker.kick.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class MainController {
    @Autowired
    GameRepository gameRepository;

    @GetMapping("/main")
    public String main() {
        return "main";
    }

}
