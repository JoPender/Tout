<?php get_header(); ?>
   <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
   <section class="container">

          <h2><?php the_title(); ?></h2>
           <?php the_content(); ?>

   </section>
   <?php endwhile; else : ?>
   <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>

<?php get_footer(); ?>
