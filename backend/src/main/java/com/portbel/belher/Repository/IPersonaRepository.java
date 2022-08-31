
package com.portbel.belher.Repository;

import com.portbel.belher.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

 @Repository
public interface IPersonaRepository extends JpaRepository<Persona, Long> {
 }