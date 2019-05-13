package kicker.kick.Entities;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import java.util.List;

@Entity
@Data
@EqualsAndHashCode
@Table(name = "player")
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    @Pattern(regexp = "slavik|vi|dimas")
    String name;
    @Pattern(regexp = "slavik|vi|dimas")
    String oppoName;
    @OneToMany(mappedBy = "player")
    List<Game> game;


}
