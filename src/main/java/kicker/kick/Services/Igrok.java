package kicker.kick.Services;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Data
public class Igrok {
    private String himself;
    private Integer zabil;
    private Integer propustil;
    private String opponent;
    private String result;

    public Igrok(String himself, Integer zabil, Integer propustil, String opponent, String result) {
        this.himself = himself;
        this.zabil = zabil;
        this.propustil = propustil;
        this.opponent = opponent;
        this.result = result;
    }
}
