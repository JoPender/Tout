<?php get_header(); ?>
   <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
   <section id='book' class="container">
     <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail('full');?></a>
      <h2><?php the_title(); ?></h2>
       <h3>Auteur : <?php the_field('book_autor') ?></h3>
       <p><?php the_field('book_format') ?></p>
       <p>réf : <?php the_field('book_id') ?></p>
       <p><?php the_field('book_summary') ?></p>
       <p><?php the_excerpt(); ?></p>
   </section>
   <?php endwhile; else : ?>
   <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>
<?php get_footer(); ?>
