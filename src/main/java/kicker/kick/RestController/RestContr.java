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

import java.time.LocalDate;
import java.time.MonthDay;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
@SuppressWarnings("Duplicates")
@CrossOrigin
@RestController
@RequestMapping("/api")
public class RestContr {
    @Autowired
    GameRepository gameRepository;

    String el = "";


    @GetMapping("/get/{name}")
    public Collection game(@PathVariable String name, @RequestParam(value = "kolvo", required = false, defaultValue = "10") String kolevo, @RequestParam(value = "oppoName", required = false, defaultValue = "Vse") String oppoName,@RequestParam(value = "datka", required = false,defaultValue = "Vse") String datka) {
        String vse = "";
        List<Igrok> igroki = new ArrayList<>();
        Igrok igrok;
        System.out.println(datka+" datka");
        System.out.println(oppoName+" oppoName");
        System.out.println("LOOOL");
        Integer kolvo=0;
        try{
            kolvo= Integer.parseInt(kolevo);
        }catch (Exception ee){
            kolvo=0;
        }

        Pageable pageable = PageRequest.of(0, kolvo, Sort.Direction.DESC, "id");

        Pattern p = Pattern.compile("^[0-9]{4}-[0-9]{2}-[0-9]{2}$");
        Matcher matcher=p.matcher(datka);
        if(kolevo.equals("Vse")){
            Iterable<Game> games1 = gameRepository.findAllByPlayerNameOrPlayer2Name(name,name);
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
        }
        else if(oppoName.equals("Vse")&&matcher.matches()){
            System.out.println("ZAHODIMA???");
            DateTimeFormatter bd=DateTimeFormatter.ofPattern("yyyy-MM-dd");

            LocalDate ld= LocalDate.parse(datka,bd);

            Iterable<Game> games1 = gameRepository.findAllByDateAndPlayerNameOrDateAndPlayer2Name(ld,name,ld,name, pageable).getContent();
            System.out.println(games1.spliterator().getExactSizeIfKnown()+ "SIZE");
            for (Game game : games1) {
                if (game.getPlayer().getName().equals(name)) {
                LocalDate dd=game.getDate();
                    System.out.println(dd.toString()+"IN 1");
                    igrok = new Igrok(game.getPlayer().getName(), game.getWin(), game.getLose(), game.getPlayer2().getName(), game.getResultPlayer1());
                    igroki.add(igrok);
                    //vse = vse.concat(game.getPlayer().getName() + " W =" + game.getWin() + " L " + game.getLose() + " Opponent " + game.getPlayer2().getName() + " i resultat = " + game.getResultPlayer1() + "\n");

                }
                if (game.getPlayer2().getName().equals(name)) {
                    LocalDate dd=game.getDate();
                    System.out.println(dd.toString()+"IN 2");
                    igrok = new Igrok(game.getPlayer2().getName(), game.getLose(), game.getWin(), game.getPlayer().getName(), game.getResultPlayer2());
                    igroki.add(igrok);
                    // vse = vse.concat(game.getPlayer2().getName())+ " W =" + game.getLose() + " L " + game.getWin()+ " Opponent " + game.getPlayer().getName() + " i resultat = " + game.getResultPlayer2() + "\n";

                }

            }
        }
       else if(!oppoName.equals("Vse")&&matcher.matches()){
            System.out.println("ZAHODIMA??? V NE VSE");
            DateTimeFormatter bd=DateTimeFormatter.ofPattern("yyyy-MM-dd");

            LocalDate ld= LocalDate.parse(datka,bd);
            Iterable<Game> games1 = gameRepository.findPagingDate(name, oppoName,ld, pageable).getContent();
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
       else if (oppoName.equals("Vse")&&datka.equals("Vse")) {
            System.out.println("TAM GDE VSE");
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
            System.out.println("ELSE");
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

        System.out.println(igroki);
        return igroki;

    }

}
