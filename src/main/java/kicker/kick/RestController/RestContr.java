package kicker.kick.RestController;

import kicker.kick.Entities.Game;
import kicker.kick.Entities.Player;
import kicker.kick.Services.Igrok;
import kicker.kick.repository.GameRepository;
import kicker.kick.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api")
public class RestContr {
    @Autowired
    GameRepository gameRepository;

    String el = "";


    @GetMapping("/get/{name}")
    public Collection game(@PathVariable String name, @RequestParam(value = "kolvo", required = false, defaultValue = "10") Integer kolvo, @RequestParam(value = "oppoName", required = false, defaultValue = "Vse") String oppoName,@RequestParam(value = "datka", required = false,defaultValue = "Vse") String datka) {
        String vse = "";
        List<Igrok> igroki = new ArrayList<>();
        Igrok igrok;
        System.out.println(datka+" datka");
        System.out.println("LOOOL");
        Pageable pageable = PageRequest.of(0, kolvo, Sort.Direction.DESC, "id");
        if (oppoName.equals("Vse")) {
            Iterable<Game> games1 = gameRepository.findAllByPlayerNameOrPlayer2Name(name, name, pageable).getContent();

            for (Game game : games1) {
                if (game.getPlayer().getName().equals(name)) {

                    igrok = new Igrok(game.getPlayer().getName(), game.getWin(), game.getLose(), game.getPlayer2().getName(), game.getResultPlayer1());
                    igroki.add(igrok);
                    //vse = vse.concat(game.getPlayer().getName() + " W =" + game.getWin() + " L " + game.getLose() + " Opponent " + game.getPlayer2().getName() + " i resultat = " + game.getResultPlayer1() + "\n");

                }
                if (game.getPlayer2().getName().equals(name)) {
                    igrok = new Igrok(game.getPlayer2().getName(), game.getLose(), game.getWin(), game.getPlayer().getName(), game.getResultPlayer2());
                    igroki.add(igrok);
                    // vse = vse.concat(game.getPlayer2().getName())+ " W =" + game.getLose() + " L " + game.getWin()+ " Opponent " + game.getPlayer().getName() + " i resultat = " + game.getResultPlayer2() + "\n";

                }

            }
        } else {
            Iterable<Game> games1 = gameRepository.findPaging(name, oppoName, pageable).getContent();
            for (Game game : games1) {
                if (game.getPlayer().getName().equals(name) && game.getPlayer2().getName().equals(oppoName)) {
                    igrok = new Igrok(game.getPlayer().getName(), game.getWin(), game.getLose(), game.getPlayer2().getName(), game.getResultPlayer1());
                    igroki.add(igrok);
                }
                if (game.getPlayer2().getName().equals(name) && game.getPlayer().getName().equals(oppoName)) {
                    igrok = new Igrok(game.getPlayer2().getName(), game.getLose(), game.getWin(), game.getPlayer().getName(), game.getResultPlayer2());
                    igroki.add(igrok);
                }
            }
        }

        System.out.println(vse);
        return igroki;

    }

}
