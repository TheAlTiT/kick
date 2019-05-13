package kicker.kick.repository;

import kicker.kick.Entities.Game;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface GameRepository extends PagingAndSortingRepository<Game, Long> {
    Page<Game> findAllByPlayerNameOrPlayer2Name(String name, String name2, Pageable pageable);

    @Query(value = "select g from Game as g  join  g.player as p where (p.name=:fname and p.oppoName=:oname) or (p.name=:oname and p.oppoName=:fname)")
    Page<Game> findPaging(@Param("fname") String name, @Param("oname") String name3, Pageable pageable);
    Game deleteAllByPlayerName(String name);
}
