package kicker.kick.Entities;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "game")
@Data
@EqualsAndHashCode
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    @Min(value = 0)
    @Max(value = 10)
    Integer win;
    @Min(value = 0)
    @Max(value = 10)
    Integer lose;

    String resultPlayer1;
    String resultPlayer2;
    LocalDate date;

    @PrePersist
    public void res() {
        if (win > lose) {
            resultPlayer1 = "W";
            resultPlayer2 = "L";
        } else {
            resultPlayer1 = "L";
            resultPlayer2 = "W";
        }
        date = LocalDate.now();
    }

    @ManyToOne(cascade = CascadeType.ALL)
    Player player;

    @ManyToOne(cascade = CascadeType.ALL)
    Player player2;


}


