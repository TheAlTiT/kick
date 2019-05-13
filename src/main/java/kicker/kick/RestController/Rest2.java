package kicker.kick.RestController;

import kicker.kick.Entities.Game;
import kicker.kick.Entities.Player;
import kicker.kick.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ap")
public class Rest2 {
    @Autowired
    GameRepository gameRepository;

    @GetMapping("/save")
    public String go(@RequestParam String name1, @RequestParam Integer win1, @RequestParam Integer lose1, @RequestParam String name2) {
        Player player1 = new Player();
        player1.setName(name1);
        player1.setOppoName(name2);
        Player player2 = new Player();
        player2.setName(name2);
        player2.setOppoName(name1);
        Game game1 = new Game();
        game1.setWin(win1);
        game1.setLose(lose1);
    /*List<Player> plList=new ArrayList<>();
    plList.add(player1);
    plList.add(player2);*/
        game1.setPlayer(player1);
        game1.setPlayer2(player2);
   /*Game game2=new Game();
    game2.setWin(lose1);
    game2.setLose(win1);
    game2.setPlayer(player2);*/
        gameRepository.save(game1);
        //  gameRepository.save(game2);
        return "lol";
    }
    @GetMapping("/del/{name}")
    public String go(@PathVariable String name){
        gameRepository.deleteAllByPlayerName(name);
        return "netu nichego";
    }
}
